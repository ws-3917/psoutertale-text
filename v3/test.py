import re
import glob

def remove_comments(source_file, dest_file):
    with open(source_file, 'r', encoding='utf-8') as file:
        content = file.read()

    # 正则表达式用于移除除了 '// textend' 之外的所有注释
    content = re.sub(r'\/\/(?! textend).*', '', content)

    with open(dest_file, 'w', encoding='utf-8') as file:
        file.write(content)

# 示例：处理所有 TypeScript 文件
for ts_file in glob.glob('aerialis/en.ts', recursive=True):
    remove_comments(ts_file, 'dest.ts')  # 请根据需要调整输出文件名或路径
