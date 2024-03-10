import AdminDashboard from "@/components/admin/AdminDashboard";

export default function AdminDashboardPage() {
  return (
    <>
      <AdminDashboard
        categories={["공지등록", "부스등록", "방명록", "회원정보"]}
      />
    </>
  );
}
