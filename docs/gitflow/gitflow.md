# Gitflow

Idée :

- Accepter le `ochallenge` le premier jour, puis cloner son propre dépôt généré.
- À partir du deuxième jour, et jusqu'à la fin de la saison, mettre à jour chaque jour son dépôt à partir du code "prof" avant d'entamer l'atelier.

## 1. Ouvrir votre dépôt

- Ouvrir votre dépôt dans VSCode (pas celui du prof) avec un terminal à disposition.
- Fermer éventuellement les onglets ouverts (ça va switcher chéri !).

## 2. Ajouter le remote du prof

A faire **une seul fois pour la saison**, ajouter le remote `prof` :

- `git remote add prof URL_SSH_DEPOT_PROF` (trouver l'URL (SSH !) du dépôt de VOTRE formateur) en passant par Github ou Kourou)

## 3. Retourner sur `main` et s'assurer que le `git status` est propre

On s'assure d'avoir bien sauvegardé le code de la veille :

- Si vous êtes déjà sur une branche `jour1` :

  - le `git status` doit être "clean", sinon `commit` & `push` comme d'habitude ;
  - puis retourner sur `main` : `git checkout main`.

- Si vous aviez codé directement sur `main` (par inadvertance, bien sûr 😉) :
  - le `git status` doit être "clean", sinon `commit` & `push` comme d'habitude ;
  - sauvegarder votre travail sur une branche à part : `git checkout -b jour1` puis `git push --set-upstream origin jour1` ;
  - puis retourner ensuite sur `main` : `git checkout main`.

## 4. Récupérer les modifications du prof sur `main`

- S''assurer d'être bien sur la branche `main` :
  - `git branch --show-current`
- Récupèrer le code du prof en local, sans l'intégrer à la branche courante :
  - `git fetch prof`
- Enfin, on écrase la branche courante (`main`) par la branche `main` du dépôt `prof` :
  - `git reset --hard prof/main` :

## 4. Créer une nouvelle branche pour la journée 2

Normalement, vous devriez maintenant avoir le code du prof sur votre branche `main` en local !

Il ne reste plus qu'à créer une nouvelle branche pour l'atelier de la journée :

- `git checkout -b jour2`

## 5. Visuellement

![](./gitflow.png)
