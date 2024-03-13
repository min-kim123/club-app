export async function ProtectedRoute({children}: {children:JSX.Element}) {
  const {
    data: { session },
  } = await supabase.auth.getSession();
}