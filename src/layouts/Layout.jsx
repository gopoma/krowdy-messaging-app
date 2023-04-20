export const Layout = ({ children }) => {
  return (
    <section className='bg-slate-100 min-h-screen'>
      <section className='max-w-[1000px] m-auto'>
        { children }
      </section>
    </section>
  )
}
