import { useState } from 'react'
import Header from './components/header/Header'

import '../src/styles/index.css'
import ItemApps from './components/item-apps/ItemApps'

const desc_empresas = 'Acceda al Resumen de movimientos, costos, producción, etc., de las Empresas registradas.';
const icon_empresas = '../src/styles/img/panel-de-control.png';

const desc_emsefor = 'Acceda al Resumen de movimientos, costos, producción, etc., de las Emsefors registradas.';
const icon_emsefor = '../src/styles/img/panel-de-control.png';

const Index = () => {
  return (
    <>

      <Header></Header>

      <div className="page-wrapper">

        <div className="container px-0 container-index" id="container">

          <div className="container p-0" id="row1">
            <div class="bg-dark-pindo" id="cover-container">
              <div className='text-animation-container'>
                <div className='d-flex align-items-end' style={{ flex: .5 }}>
                  <h1 class="text-white" id="title-row1">Pindo S.A</h1>
                </div>

                <div className='d-flex align-items-start' style={{ flex: .5 }}>
                  <h2 class="text-white" id="title-row2">Sistema de Información Forestal</h2>
                </div>


              </div>
            </div>
          </div>

          <div className='container'>

            <div className="container-xxl py-5">
              <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="hr-text unset-margin mb-4"></div>
                  <h1 className="mt-2 text-app-title">Aplicaciones</h1>
                </div>

                <div className="row g-4">
                  <ItemApps title={'Empresas'} description={desc_empresas} icon={icon_empresas} url={'/empresas'}></ItemApps>
                  <ItemApps title={'Rodales'} description={desc_emsefor} icon={null} url={'/rodales'}></ItemApps>
                  <ItemApps title={'Sagpyas'} description={desc_emsefor} icon={icon_emsefor}></ItemApps>

                </div>

              </div>
            </div>


          </div>


        </div>


      </div>
    </>
  )
}

export default Index