export default function footer(height: number | undefined) {
  return (
      <footer
        className={`sticky top-[${height}px] md:top-[100vh] flex items-center justify-between rounded-t-lg bg-white p-4 shadow md:p-6`}
      >
        <span className="text-sm text-primary-200">
          <a href="https://youtu.be/du-TY1GUFGk">For friends and family</a>
        </span>
        <span className="text-sm font-extralight text-primary-100">
          <a href="http://bookshelfadmin.jk">Admin</a>
        </span>
      </footer>
  );
}