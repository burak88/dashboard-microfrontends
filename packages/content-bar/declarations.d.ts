declare module 'shell/userStore' {
  export const useUserStore: () => {
    userData: any;
    setUser: (data: any) => void;
  };
}