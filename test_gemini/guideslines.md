## Architecture
    - Chaque interface doit être suffixé par "Interface", les traits par "Trait", pas d'autre format acceptés
    - Chaque fichier appartenant à un design pattern (exemple : Factory, Repository, Specification, etc) doit être 
        suffixé par le nom du pattern utilisé (exemple: isPremiumSpecification, ComponentFactory, ArticleRepository, etc)


## Style de code
    - Les ternaires ne doivent pas être imbriquées entres elles
    - L'instanciation de classe n'est pas autorisée au sein d'une méthode excepté dans une classe Factory. Hors des classes Factory, l'instance doit être 
        récupérée depuis un objet Factory


