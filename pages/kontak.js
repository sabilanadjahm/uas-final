import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useEffect, useState } from 'react';

export default function Kontak() {
  const [role, setRole] = useState('');

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (storedRole) setRole(storedRole);
  }, []);

  return (
    <ProtectedRoute>
      <Navbar role={role} />
      <div className="p-6 min-h-screen bg-gradient-to-br from-[#FFF8F0] to-[#FAEDCD] text-[#344E41] font-[Poppins]">
        <h1 className="text-4xl font-extrabold mb-4 text-[#6B4226] tracking-wide flex items-center gap-2">
          📇 Kontak Developer
        </h1>

        <div className="bg-white/90 border border-[#EADBC8] p-6 rounded-2xl shadow-md max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <Image
              src="/profil.jpg"
              alt="Foto Profil"
              width={150}
              height={150}
              className="rounded-full border-4 border-[#FFCAD4] shadow-md"
            />
            <div className="mt-6 w-full text-center text-[#6B4226] space-y-2 text-lg">
              <p><strong>👩 Nama:</strong> Sabila Nadjah Ma'ripah</p>
              <p><strong>🆔 NIM:</strong> 232302003</p>
              <p><strong>🏫 Prodi:</strong> D3 Komputerisasi Akuntansi</p>
              <p><strong>📧 Email:</strong> sabilanadjah06@gmail.com</p>
              <p><strong>📞 No Telepon:</strong> 0895339511146</p>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
