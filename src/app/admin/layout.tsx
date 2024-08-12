import { AdminMenu } from "@/components";


export default function LechonaLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main>

      <div className="mb-16 mt-3">
      <AdminMenu />
      </div>

      <div className="px-0 sm:px-0 md:px-0 lg:px-32">
        {children}
      </div>
      
        
    </main>
  );
}