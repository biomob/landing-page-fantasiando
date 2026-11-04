export default function ProductLoading() {
  return (
    <section className="section detail" aria-busy="true" aria-label="Carregando peça">
      <div className="detail-image skeleton" />
      <div className="detail-copy">
        <div className="skeleton skeleton-line short" />
        <div className="skeleton skeleton-line title" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line" />
      </div>
    </section>
  );
}
