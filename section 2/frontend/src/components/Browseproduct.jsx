import React, { useRef, useState } from 'react'
import laptopData from './dummyData';

const BrowseProduct = () => {

  const [productList, setProductList] = useState(laptopData);


  const searchRef = useRef(null);



  const brands = ['HP', 'APPLE', 'ACER', 'DELL', 'HUAWEI', 'L.G', 'LENOVO'];
  const [selBrands, setSelBrands] = useState([]);

  const ram = ['4 GB', '8 GB', '12 GB', '16 GB', '32 GB'];
  const [selram, setSelram] = useState([]);

  const processor = ['Intel Core i3', 'Intel Core i5', 'Intel Core i7', 'Intel Core i9'];
  const [selprocessor, setSelprocessor] = useState([]);

  const operatingsystem = ['Windows 10', 'Windows 11', 'Windows 11 Home', 'DOS', 'Mac OS', 'Linux'];
  const [seloperatingsystem, setSeloperatingsystem] = useState([]);

  const harddisk = ['256 GB', '512 GB', '1 TB', '2 TB'];
  const [selharddisk, setSelharddisk] = useState([]);





  const searchProduct = () => {
    const filteredData = laptopData.filter((laptop) => {
      return laptop.brand.toLowerCase().includes(searchRef.current.value.toLowerCase())
    });
    setProductList(filteredData);
  }



  const filterPrice = (e) => {
    console.log(e.target.value);
    const filteredData = laptopData.filter((laptop) => { return laptop.price <= parseInt(e.target.value) });

    setProductList(filteredData)


  }

  const SelectBrand = (e, brand) => {
    console.log(e.target.checked);
    if (selBrands.includes(brand)) {
      const filteredBrands = selBrands.filter((b) => { return b !== brand });
      if (filteredBrands.length === 0) {
        setProductList(laptopData);
      } else {


        const filteredData = laptopData.filter((laptop) => { return filteredBrands.includes(laptop.brand) });
        setProductList(filteredData);

      }

      setSelBrands(filteredBrands);
      console.log(filteredBrands);
    } else {
      const filteredBrands = [...selBrands, brand]

      const filteredData = laptopData.filter((laptop) => { return filteredBrands.includes(laptop.brand) });
      setProductList(filteredData);
      setSelBrands(filteredBrands);


      console.log([...selBrands, brand]);
    }
  }

  const Selectram = (e, ram) => {
    console.log(e.target.checked);
    if (selram.includes(ram)) {
      const filteredram = selram.filter((r) => { return r !== ram });
      if (filteredram.length === 0) {
        setProductList(laptopData);
      } else {


        const filteredData = laptopData.filter((laptop) => { return filteredram.includes(laptop.ram) });
        setProductList(filteredData);

      }

      setSelram(filteredram);
      console.log(filteredram);
    } else {
      const filteredram = [...selram, ram]
      const filteredData = laptopData.filter((laptop) => { return filteredram.includes(laptop.ram) });
      setProductList(filteredData);
      setSelram(filteredram);


      console.log([...selram, ram]);
    }
  }

  const Selectoperatingsystem = (e, operatingsystem) => {
    console.log(e.target.checked);
    if (seloperatingsystem.includes(operatingsystem)) {
      const filteredoperatingsystem = seloperatingsystem.filter((os) => { return os !== operatingsystem });
      if (filteredoperatingsystem.length === 0) {
        setProductList(laptopData);
      } else {


        const filteredData = laptopData.filter((laptop) => { return filteredoperatingsystem.includes(laptop.operatingsystem) });
        setProductList(filteredData);

      }

      setSeloperatingsystem(filteredoperatingsystem);
      console.log(filteredoperatingsystem);
    } else {
      const filteredoperatingsystem = [...seloperatingsystem, operatingsystem]
      const filteredData = laptopData.filter((laptop) => { return filteredoperatingsystem.includes(laptop.operatingsystem) });
      setProductList(filteredData);
      setSeloperatingsystem(filteredoperatingsystem);


      console.log([...seloperatingsystem, operatingsystem]);
    }
  }
  const Selectprocessor = (e, processor) => {
    console.log(e.target.checked);
    if (selprocessor.includes(processor)) {
      const filteredprocessor = selprocessor.filter((p) => { return p !== processor });
      if (filteredprocessor.length === 0) {
        setProductList(laptopData);
      } else {


        const filteredData = laptopData.filter((laptop) => { return filteredprocessor.includes(laptop.processor) });
        setProductList(filteredData);

      }

      setSelprocessor(filteredprocessor);
      console.log(filteredprocessor);
    } else {
      const filteredprocessor = [...selprocessor, processor]
      const filteredData = laptopData.filter((laptop) => { return filteredprocessor.includes(laptop.processor) });
      setProductList(filteredData);
      setSelprocessor(filteredprocessor);


      console.log([...selprocessor, processor]);
    }
  }

  const Selectharddisk = (e, harddisk) => {
    console.log(e.target.checked);
    if (selharddisk.includes(harddisk)) {
      const filteredharddisk = selharddisk.filter((hd) => { return hd !== harddisk });
      if (filteredharddisk.length === 0) {
        setProductList(laptopData);
      } else {


        const filteredData = laptopData.filter((laptop) => { return filteredharddisk.includes(laptop.harddisk) });
        setProductList(filteredData);

      }

      setSelharddisk(filteredharddisk);
      console.log(filteredharddisk);
    } else {
      const filteredharddisk = [...selharddisk, harddisk]
      const filteredData = laptopData.filter((laptop) => { return filteredharddisk.includes(laptop.harddisk) });
      setProductList(filteredData);
      setSelharddisk(filteredharddisk);


      console.log([...selharddisk, harddisk]);
    }
  }



















  return (
    <div>
      <header className='bg-info-subtle text-dark'>
        <div className='container py-5'>
          <img className='' style={{ width: '200px' }} src='https://themes.pixelstrap.com/fastkart/document/assets/images/logo.png' alt='' />

          <h4 className='text-center'>"Search Laptop"</h4>
          <div className='input-group'>
            <input type="text" className='form-control' placeholder='Search for Products,Brand and More ...' ref={searchRef} />
            <button onClick={searchProduct} className='btn btn-primary w-5'>Search</button>
          </div>
        </div>
      </header>
      <div className='container-fluid bg-success-subtle' >
        <div className='row' >
          <div className='col-md-3' style={{ marginTop: '10px' }}>
            <div className='card'>
              <div className='card-body'>


                <label>Max Price</label>
                <input type="range" step={5000} min={10000} max={200000} className='form-range' onChange={filterPrice} />

                
                <hr className='my-3 mb-2 px-2' />
                <label className='fw-bold '>BRANDS</label>
                {
                  brands.map((b) => {
                    return <div>
                      <input type='checkbox' style={{ margin: '4px' }}
                        checked={selBrands.includes(b)}
                        onChange={(e) => { SelectBrand(e, b) }} />
                      <label>{b}</label>



                    </div>



                  })
                }
                <hr className='my-3' />
                <label className='fw-bold'>RAM</label>
                {
                  ram.map((r) => {
                    return <div>
                      <input
                        type='checkbox' style={{ margin: '4px' }}
                        checked={selram.includes(r)}
                        onChange={(e) => { Selectram(e, r) }} />
                      <label>{r}</label>



                    </div>



                  })
                }
                <hr className='my-3' />
                <label className='fw-bold'>PROCESSOR</label>
                {
                  processor.map((p) => {
                    return <div>
                      <input
                        type='checkbox' style={{ margin: '4px' }}
                        checked={selprocessor.includes(p)}
                        onChange={(e) => { Selectprocessor(e, p) }} />
                      <label>{p}</label>



                    </div>



                  })
                }
                <hr className='my-3' />
                <label className='fw-bold'>OPERATING SYSTEM</label>
                {
                  operatingsystem.map((os) => {
                    return <div>
                      <input
                        type='checkbox' style={{ margin: '4px' }}
                        checked={seloperatingsystem.includes(os)}
                        onChange={(e) => { Selectoperatingsystem(e, os) }} />
                      <label>{os}</label>



                    </div>



                  })
                }
                <hr className='my-3' />
                <label className='fw-bold'>HARD DISK CAPACITY</label>
                {
                  harddisk.map((hd) => {
                    return <div>
                      <input
                        type='checkbox' style={{ margin: '4px' }}
                        checked={selharddisk.includes(hd)}
                        onChange={(e) => { Selectharddisk(e, hd) }} />
                      <label>{hd}</label>



                    </div>



                  })
                }












              </div>





            </div>
          </div>

          <div className='col-md-9' style={{ marginTop: '10px' }}>


            <div className='row gy-4'>
              {productList.map((laptop) => {
                return (<div className='col-md-3'>
                  <div className='card' style={{ height: '430px', width: '240px' }}>
                    <img src={laptop.image} style={{ height: '300px', objectFit: 'cover', objectPosition: 'center' }} alt="" />

                    <div className='card-body'>
                      <h5>{laptop.brand}</h5>
                      <h4>{laptop.model}</h4>
                      <button className='btn btn-success' style={{ padding: '2px 4px 2px 4px', lineHeight: 'normal', display: 'inline-block', fontSize: '12px', borderRadius: '3px' }}> <i class="fa-regular fa-star"></i> {laptop.rating}</button> <p>Stars from {laptop.reviews} reviews</p>


                      <button className='btn btn-primary btn-sm float-end'> Buy Now</button>




                      <h4 className='fw-bold'>₹{laptop.price}</h4>

                    </div>
                  </div>
                </div>)
              })}
            </div>
          </div>

        </div>
      </div>
    </div>








  )
}






export default BrowseProduct;
