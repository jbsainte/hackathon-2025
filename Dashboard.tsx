export default function Dashboard() {
  const data = useQuery("user", fetchUser); // logique métier ici ❌
  return <div>{data.name}</div>;
}
