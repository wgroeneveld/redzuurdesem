templatedir = ../../../pandoc/templates

all:
	pandoc -f markdown+smart intro.pd.md kabouters.pd.md de-leerschool.pd.md de-echte-leerschool.pd.md crashcursus-microbiologie.pd.md structuur.pd.md refs.pd.md -V lang=nl-BE --include-in-header=preamble.tex --include-before-body=voorwoord.tex --pdf-engine=xelatex -V documentclass=book --filter pandoc-citeproc --top-level-division=chapter --toc -V toc-title:"Inhoudsopgave" --metadata-file=metadata.yml --highlight-style=haddock -o boek.pdf

src:
	pandoc -f markdown+smart intro.pd.md  --pdf-engine=xelatex -V documentclass=book --top-level-division=chapter --toc -V toc-title:"Inhoudsopgave" --metadata-file=metadata.yml --highlight-style=haddock -t latex > boek.tex

clean:
	rm -rf *.pdf
