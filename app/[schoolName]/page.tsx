interface PageProps {
  params: {
    schoolName: string;
  };
}

export default function Page({ params }: PageProps) {
  const { schoolName } = params;
  return <div>{schoolName}</div>;
}
