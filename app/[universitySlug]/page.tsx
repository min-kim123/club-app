interface PageProps {
  params: {
    universitySlug: string;
  };
}

export default function Page({ params }: PageProps) {
  const { universitySlug } = params;
  return <div>{universitySlug}</div>;
}
