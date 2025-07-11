declare module 'userCard/UserCard' {
  import React from 'react';
  const UserCard: React.ComponentType<any>;
  export default UserCard;
}

declare module 'contentBar/ContentBar' {
  import React from 'react';
  const ContentBar: React.ComponentType<any>;
  export default ContentBar;
}

declare module 'shell/userStore' {
  export const useUserStore: () => {
    userData: any;
    setUser: (data: any) => void;
  };
}