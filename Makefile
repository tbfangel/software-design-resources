.PHONY: validate viewer open-viewer clean

# Validate the OKF bundle invariants (same check CI runs).
validate:
	python3 scripts/validate_okf.py

# Build the self-contained viewer -> dist/index.html
viewer:
	python3 scripts/build_viewer.py

# Build and open the viewer in the default browser.
open-viewer: viewer
	open dist/index.html

clean:
	rm -rf dist
