from pathlib import Path
from re import findall
from requests import get as fetch

origin = "/home/ignacioc/Projects/Godot/IdiomUnicorn/source/"
unicorn_source = "https://ereadinggames.com/idiom-unicorn/"

def download_media(files: list[str]):
    for filename in files:
        if (filename.startswith("media/sounds")):
            filename = filename.replace("*", "ogg")
        if (filename.startswith("media/music")):
            filename = filename.replace("*", "mp3")
        response = fetch(unicorn_source + filename)
        response.raise_for_status()

        path = Path(origin, filename)
        path.parent.mkdir(parents=True, exist_ok=True)
        with open(path, "wb") as file:
            file.write(response.content)

        
with open("idiom-unicorn-min.js", "r") as fp:
    whole_file = fp.read()

files = whole_file.split("// ")
for file in files:
    idx = file.find("\n")
    filename = file[:idx]
    if (filename == "/*! Built with IMPACT - impactjs.com */"): filename = "lib/main.js"

    path = Path(origin, filename)
    path.parent.mkdir(parents=True, exist_ok=True)

    contents = file[idx:]
    media_files = findall(r"(?<=')media\/[^']+(?=')", contents)
    download_media(media_files)

    with open(path, "w") as fp:
        fp.write(contents)

