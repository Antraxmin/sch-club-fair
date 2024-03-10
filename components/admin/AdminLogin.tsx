import { useState } from "react";

interface AdminLoginProps {
  onLogin: (adminId: string, password: string) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(adminId, password);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white p-8 rounded-md shadow-lg w-80">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          관리자 로그인
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="adminId"
              className="block text-gray-700 font-semibold mb-2"
            >
              아이디
            </label>
            <input
              type="text"
              id="adminId"
              placeholder="아이디를 입력하세요"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-[#2B9F70]"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-[#2B9F70]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2B9F70] text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
