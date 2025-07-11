import React, { Suspense } from "react";
import { useUserStore } from "shell/userStore";
import { mockContent, mockUser } from "./data/mockData";
import ErrorBoundary from "./ErrorBoundary";

// Fallback components
const UserCardFallback = ({ user }: any) => (
  <div className="p-8 text-center">
    <h3 className="text-xl font-semibold">User Information</h3>
    <div className="mt-4 space-y-2 text-sm text-gray-700">
      <p><strong>Name:</strong> {user?.name || "N/A"}</p>
      <p><strong>Email:</strong> {user?.email || "N/A"}</p>
      <p><strong>Role:</strong> {user?.role || "N/A"}</p>
    </div>
    <div className="mt-4 p-4 bg-gray-100 rounded-md text-xs text-gray-500">
      Remote UserCard module is not available. Showing fallback content.
    </div>
  </div>
);

const ContentBarFallback = ({ content }: any) => (
  <div className="p-8">
    <h3 className="text-xl font-semibold">Content Dashboard</h3>
    <div className="mt-4 space-y-4">
      {content?.length > 0 ? (
        content.map((item: any, index: number) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-md bg-white shadow-sm"
          >
            <h4 className="font-semibold">{item?.title || "Content Item"}</h4>
            <p className="text-sm text-gray-600">
              {item?.description || "No description available"}
            </p>
          </div>
        ))
      ) : (
        <p>No content available</p>
      )}
    </div>
    <div className="mt-4 p-4 bg-gray-100 rounded-md text-xs text-gray-500">
      Remote ContentBar module is not available. Showing fallback content.
    </div>
  </div>
);

// Lazy load remote components
const UserCardApp = React.lazy(() =>
  import("userCard/UserCard").catch(() => ({ default: UserCardFallback }))
);

const ContentBarApp = React.lazy(() =>
  import("contentBar/ContentBar").catch(() => ({ default: ContentBarFallback }))
);

const App = () => {
  const { userData } = useUserStore();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-14 bg-white/20 backdrop-blur-md shadow-md z-50 flex items-center justify-center text-white font-semibold text-lg tracking-wide">
        {userData.name} Shell's
      </header>

      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-500 to-purple-600 font-sans">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 lg:h-[calc(100vh-5rem)]">
          <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl transition hover:-translate-y-1 hover:shadow-2xl overflow-hidden">
            <Suspense fallback={<div className="h-52 flex items-center justify-center text-gray-500 text-sm">Loading User Card...</div>}>
              <ErrorBoundary fallback={<UserCardFallback user={mockUser} />}>
                <UserCardApp user={mockUser} />
              </ErrorBoundary>
            </Suspense>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl transition hover:-translate-y-1 hover:shadow-2xl overflow-hidden">
            <Suspense fallback={<div className="h-52 flex items-center justify-center text-gray-500 text-sm">Loading Content Bar...</div>}>
              <ErrorBoundary fallback={<ContentBarFallback content={mockContent} />}>
                <ContentBarApp content={mockContent} />
              </ErrorBoundary>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
