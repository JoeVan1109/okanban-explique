# Principales Commandes psql pour PostgreSQL

## Introduction

`psql` est un outil en ligne de commande pour interagir avec les bases de données PostgreSQL. Voici une liste des principales commandes `psql` qui peuvent t'aider à naviguer et à gérer tes bases de données postgreSQL.

---

## Commandes de Navigation et Information

### \l (ou \list)

Affiche la liste de toutes les bases de données.

```sql
\l
```

### \c (ou \connect)

Se connecter à une base de données spécifique.

```sql
\c nom_de_la_base_de_donnees
```

### \dt

Affiche la liste de toutes les tables dans la base de données actuelle.

```sql
\dt
```

### \d

Affiche la description d'une table spécifique, y compris ses colonnes et types de données.

```sql
\d nom_de_la_table
```

### \dn

Affiche la liste des schémas.

```sql
\dn
```

### \dv

Affiche la liste des vues.

```sql
\dv
```

### \di

Affiche la liste des index.

```sql
\di
```

### \df

Affiche la liste des fonctions.

```sql
\df
```

### \dT

Affiche la liste des types.

```sql
\dT
```

### \du

Affiche la liste des utilisateurs (roles).

```sql
\du
```

### \ds

Affiche la liste des séquences.

```sql
\ds
```

### \d+

Affiche des informations supplémentaires sur les tables, vues, index, séquences, ou utilisateurs. Par exemple, pour afficher plus de détails sur une table:

```sql
\d+ nom_de_la_table
```

---

## Commandes de Métacommandes

### \i (ou \include)

Exécute les commandes SQL à partir d'un fichier.

```sql
\i chemin_du_fichier.sql
```

### \g (ou \go)

Envoie la commande en cours vers le serveur PostgreSQL, synonyme de point-virgule (;).

```sql
SELECT * FROM ma_table \g
```

### \o (ou \output)

Dirige la sortie des commandes vers un fichier.

```sql
\o chemin_du_fichier.txt

-- Pour revenir à la sortie standard:
\o
```

### \q (ou \quit)

Quitte psql.

```sql
\q
```

---

## Commandes Utiles

### \x

Active ou désactive l'affichage étendu. Utile pour afficher des résultats larges.

```sql
\x
```

### \timing

Active ou désactive l'affichage du temps d'exécution pour les commandes SQL.

```sql
\timing
```

### \watch

Répète une commande SQL à intervalles réguliers.

```sql
\watch [intervalle en secondes]
```

### \! (ou \shell)

Exécute une commande shell depuis psql.

```sql
\! ll
```

---

## Autres Commandes Utiles

### \set

Définit/ou affiche des variables.

```sql
\set nom_de_la_variable valeur
```

### \unset

Supprime une variable.

```sql
\unset nom_de_la_variable
```

### \echo

Affiche un texte donné.

```sql
\echo 'Hello, PostgreSQL!'
```

### \h (ou \help)

Affiche l'aide pour les commandes SQL.

```sql
\h nom_de_la_commande
```

### \?

Affiche l'aide pour les métacommandes psql.

```sql
\?
```

---

## Conclusion

Ce guide des commandes `psql` te permet de naviguer efficacement dans l'interface en ligne de commande de PostgreSQL. Apprends et pratique ces commandes pour améliorer ta productivité et ta maîtrise de PostgreSQL.

---

J'espère que cette fiche te sera utile ! Si tu as des questions ou des besoins supplémentaires, n'hésite pas à demander.
