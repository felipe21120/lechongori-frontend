import { Carrousel, TopMenu } from "@/components";

export default function LechonaLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main>
      <div className="mb-20 mt-3">
        <TopMenu />
      </div>


      <Carrousel />


      <div className="px-0 sm:px-40 mt-20">
        {children}
      </div>
        
    </main>
  );
}