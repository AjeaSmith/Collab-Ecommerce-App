export const testing = () => {
  return disptch => {
    disptch({ type: "MESSAGE", payload: "Redux is working" });
  };
};
