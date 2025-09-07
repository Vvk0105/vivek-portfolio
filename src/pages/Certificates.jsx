const certificates = [
  { title: "MCA Degree", img: "/certificates/mca-certificate.jpg" },
  { title: "BCA Degree", img: "/certificates/bca-certificate.jpg" },
  { title: "NPTEL: Python for Data Science", img: "/certificates/Python-for-Data Science.jpg" },

];

export default function Certificates() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6">Certificates & Qualifications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((c, i) => (
          <div key={i} className="border rounded-lg shadow hover:shadow-lg transition p-4">
            <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
            <img src={c.img} alt={c.title} className="rounded-lg" />
          </div>
        ))}
      </div>
    </section>
  );
}
