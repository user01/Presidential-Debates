
docs/index.html: frontend/dist/index.html
	rsync frontend/dist/* docs/
	sed -i '' 's/\/main/main/g' ./docs/index.html
	rm docs/*.map

frontend/dist/index.html: generated/model.results.json
	cd frontend && npm run build-only && cd ..

generated/model.results.json: generated/df_full_features.pickle
	python model.py

generated/df_full_features.pickle:
	python feature_engineering.py

clean:
	-$(RM) generated/*.csv
	-$(RM) generated/*.pickle
	-$(RM) generated/*.json
	-$(RM) frontend/dist/*
	-$(RM) docs/*
