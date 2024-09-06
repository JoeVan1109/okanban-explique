list (
  id                       -- identifiant entier généré automatiquement
  title                    -- chaine de caractère
  position                 -- entier positif
)

card (
  id                       -- identifiant entier généré automatiquement
  title                    -- chaine de caractère
  content                  -- chaine de caractère
  position                 -- entier positif
  color                    -- chaine de caractère au format hexadecimal (#000000)
  list_id  #FK->list.id    -- entier position, clé étrangère pointant vers la table 
)

tag (
  id                       -- identifiant entier généré automatiquement
  name                     -- chaine de caractère
  color                    -- chaine de caractère au format hexadecimal (#000000)
)

card_has_tag (
  id                       -- identifiant entier généré automatiquement
  tag_id   #FK->tag.id     -- entier clé etrangère
  card_id  #FK-> card.id   -- entier clé etrangère
)