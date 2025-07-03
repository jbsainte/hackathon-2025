# Best Practices JavaScript / React de l’équipe

✅ Les règles de base :

1. **Pas d’appel API direct dans les composants.**
   → Utiliser un hook ou un service.

2. **Utiliser des hooks personnalisés pour isoler la logique.**
   → Les noms de hooks doivent commencer par `use`.

3. **Respecter le nommage :**
   - `camelCase` pour variables et fonctions
   - `PascalCase` pour composants

4. **Utiliser `useEffect` uniquement pour des effets secondaires.**

---

✅ Bon exemple :

```js
function useUser() {
  return useQuery("user", fetchUser);
}

function Dashboard() {
  const user = useUser();

  return <p>{user.name}</p>;
}
```

❌ Mauvais exemple :

```js
function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/user") // appel direct
      .then((res) => res.json())
      .then(setUser);
  }, []);
}
```
