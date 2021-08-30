const Contact = () => {
  const openToky = () => {
    if (window) window.openTokyAsk();
  };

  return (
    <div>
      Contact !<button onClick={() => openToky()}>GO</button>
    </div>
  );
};

export default Contact;
