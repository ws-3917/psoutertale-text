import glob, re, os


def load_po_file(po_file_path):
    with open(po_file_path, 'r', encoding='utf-8') as po_file:
        po_contents = po_file.readlines()

    translations = {}
    key = None
    value = []
    for line in po_contents:
        if line.startswith('msgid '):
            if key is not None and value:
                # 将之前的msgid和msgstr加入到字典中
                value = [p for p in value if p]
                if not value:
                    translations[key] = key
                else:
                    translations[key] = ''.join(value)
            # 重置key和value，准备读取新的msgid和msgstr
            key = line[len('msgid '):].strip()[1:-1].replace(r'\"', r'"')  # 去除msgid " 和 "，并去转义
            value = []
        elif line.startswith('msgstr '):
            aimstr = line[len('msgstr '):].strip()[1:-1].replace(r'\"', r'"')
            value.append(aimstr)
        elif key and line.startswith('"'):
            # 拼接多行的msgstr
            nextstr = line.strip()[1:-1].replace(r'\"', r'"')
            value.append(nextstr)

    # 确保最后一个msgid/msgstr对也被加入到字典中
    if key and value:
        translations[key] = ''.join(value)

    return translations
def apply_translations_and_save(file_path, translations):
    with open(file_path, 'r', encoding='utf-8') as file:
        file_content = file.read()

    # 正则表达式用于移除除了 '// textend' 之外的所有注释
    file_content = re.sub(r'\/\/(?! textend).*', '', file_content)
    
    def replace_function(match):
        original_string = match.group(1) or match.group(2)
        # 去转义化
        if not original_string:
            original_string = ""
        originstr = original_string.replace(r'\"', '"').replace(r"\'", "'")
        # 从translations查找翻译
        if original_string == "<25>{#f/1}{#n1}* \"Once, there was a monster...\"":
            pass
        translated_string = translations.get(originstr, originstr)
        
        # 重转义
        translated_string = translated_string.replace(r'"', r'\"')
        return f'"{translated_string}"'

    string_regex = re.compile(r"'((?:\\.|[^'\\])*)'|" r'"((?:\\.|[^"\\])*)"')
    new_content = re.sub(string_regex, replace_function, file_content)

    with open(file_path.replace("text", "zh-cn"), 'w', encoding='utf-8') as file:
        file.write(new_content)

for po_file in glob.glob('**/zh-cn*.po', recursive=True):
    translations = load_po_file(po_file)
    base_file_path = os.path.dirname(po_file)

    ts_path = base_file_path + "/text.ts"
    if os.path.exists(ts_path):
        apply_translations_and_save(ts_path, translations)
