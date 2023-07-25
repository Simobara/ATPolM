const eventBus = {
  on(event, callback) {
    const handler = (e) => callback(e.detail);
    document.addEventListener(event, handler);
    return () => document.removeEventListener(event, handler);
  },
  dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
};

export default eventBus;
