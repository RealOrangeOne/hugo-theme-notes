# Recipes
@default:
  just --list

@example *ARGS:
  hugo -s exampleSite {{ ARGS }}
