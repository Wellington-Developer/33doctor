import './styles.css';

// MUI icons
import SearchIcon from '@mui/icons-material/Search';

export const Filter = () => {
  return (
    <div data-aos="fade-down" className="filter-container">
      <div >
        <div className="titles">
          <h1>A partir de R$ xx,xx</h1>
          <div className="title">
            <a href="https://www.google.com.br/">Consutlas</a>
            <a href="https://www.google.com.br/">Oftalmo</a>
            <a href="https://www.google.com.br/">Imagem</a>
            <a href="https://www.google.com.br/">Cardiológico</a>
            <a href="https://www.google.com.br/">Laboratório</a>
          </div>
        </div>

        <div className="filter">
          <div className="filter-input">
            <input type="text" placeholder="Do que você precisa?">
              
            </input>
            <div className="search-icon">
              <SearchIcon />
            </div>
          </div>

          <div className="filter-right">
            <h1>Preço</h1>
            <h1>Localidade</h1>
          </div>
        </div>
      </div>
    </div>
    
  )
}