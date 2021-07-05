const Announcer = (message: string) =>
  <div role="region" aria-live="polite" className="visually-hidden">{message}</div>

export default Announcer