templatedir = ../../../pandoc/templates

all:
	pandoc -f markdown+smart 00.pd.md 01.pd.md 02.pd.md 03.pd.md 04.pd.md 05.pd.md 99.pd.md -V lang=nl-BE --include-in-header=preamble.tex --include-before-body=voorwoord.tex --pdf-engine=xelatex -V documentclass=book --filter pandoc-citeproc --top-level-division=chapter --toc -V toc-title:"Inhoudsopgave" --metadata-file=metadata.yml --highlight-style=haddock -o boek.pdf

src:
	pandoc -f markdown+smart 00.pd.md 01.pd.md  --pdf-engine=xelatex -V documentclass=book --top-level-division=chapter --toc -V toc-title:"Inhoudsopgave" --metadata-file=metadata.yml --highlight-style=haddock -t latex > boek.tex

clean:
	rm -rf *.pdf
