import glob,re,os

def extract_strings_and_save_po(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        file_content = file.read()

    # 正则表达式用于移除除了 '// textend' 之外的所有注释
    file_content = re.sub(r'\/\/(?! textend).*', '', file_content)
    
    constants = ['f_prespear', 'n_sidebarCellPms3', 'text']
    for constant in constants:
        # 匹配对应常量的定义，如 const text = {...};
        object_match = re.search(f'const {constant} ([\\s\\S]*?);(?=\\s*// textend)', file_content, re.MULTILINE)
        if not object_match:
            continue

        object_content = object_match.group(1)

        string_regex = re.compile(r"'((?:\\.|[^'\\])*)'|" r'"((?:\\.|[^"\\])*)"')
        po_content = ''

        for match in string_regex.finditer(object_content):
            extracted_string = match.group(1) or match.group(2)

            if extracted_string:
                # 去转义化
                originstr = extracted_string.replace(r"\'", r"'").replace(r'\"', r'"')
                newstring = originstr.replace(r'"', r'\"')  # 重转义
                po_content += f'msgid "{newstring}"\n'
                po_content += f'msgstr "{newstring}"\n\n'

        if po_content:
            po_file_path = f"{os.path.splitext(file_path)[0]}_{constant}.po" if constant != 'text' else f"{os.path.splitext(file_path)[0]}.po"
            po_file_path = po_file_path.replace("text", "zh-cn")
            with open(po_file_path, 'w', encoding='utf-8') as po_file:
                po_file.write(po_content)

# 获取所有.ts文件，但排除在'/node_modules/'目录下的文件
for file in glob.glob('**/text*.ts', recursive=True):
    if '/node_modules/' not in file:
        extract_strings_and_save_po(file)
