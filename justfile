EXAMPLE_DIR := "exampleSite"

# Recipes
@default:
  just --list

@hugo *ARGS:
  hugo -s {{ EXAMPLE_DIR }} {{ ARGS }}
