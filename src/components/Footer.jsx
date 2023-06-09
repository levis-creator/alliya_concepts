const Footer = () => {
  return (
    <footer>
      <div className="w-full ">
        <div className="flex items-center gap-1">
          Alliya Concepts <span>{new Date().getFullYear()}</span>
          <span className="text-xl">©</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
