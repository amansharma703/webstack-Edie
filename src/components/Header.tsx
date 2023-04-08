export const Header = () => {
  return (
    <section className='home' id='home'>
                <div className='container'>
                    <div className='hero-text'>
                        <h3 className='blue-sub'>Unhappy with your website?</h3>
                        <h1 className='home-heading'>We create beautiful and fast web services</h1>
                    </div>
                    <div className='hero-img'></div>
                    <div className='hero-join'>
                        <h1 className='home-heading'>Story, emotion and purpose</h1>
                        <p className='join-desc'>
                            We help transform your ideas into real world applications that will outperform your toughest competition and help you
                            achieve your strategic goals in short period of time.
                        </p>
                        <p className='join-small'>Want us to contact you?</p>
                        <form action='/' className='form'>
                            <input type='text' className='email' id='email' placeholder='Email' />
                            <button type='submit' className='btn-submit'>
                                Join
                            </button>
                        </form>
                    </div>
                </div>
            </section>
  )
}