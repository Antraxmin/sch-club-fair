import AdminLogin from "@/components/admin/AdminLogin";

export default function AdminLoginPage() {
  const handleLogin = (adminId: string, password: string) => {
    if (
      adminId === process.env.NEXT_PUBLIC_ADMIN_ID &&
      password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      alert("관리자 권한으로 접속합니다.");
    } else {
      alert("관리자 계정이 아닙니다");
    }
  };

  return <AdminLogin onLogin={handleLogin} />;
}
