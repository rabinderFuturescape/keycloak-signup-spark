import { AuthForm } from "@/components/auth/AuthForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="inline-block p-2 bg-white rounded-2xl shadow-sm mb-4">
            <div className="w-12 h-12 auth-gradient rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default Index;