export default function Info() {
  return (
    <div className="container mx-auto flex justify-center gap-4 mb-4">
      <a
        href="/privacy"
        className="hover:underline underline-offset-8 decoration-wavy decoration-green-500"
      >
        Privacy
      </a>
      <a
        href="/projects"
        className="hover:underline underline-offset-8 decoration-wavy decoration-green-500"
      >
        Projects
      </a>
      <a
        href="/imprint"
        className="hover:underline underline-offset-8 decoration-wavy decoration-green-500"
      >
        Imprint
      </a>
    </div>
  );
}
