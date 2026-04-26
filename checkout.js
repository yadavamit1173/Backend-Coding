
const loading = false ;
async function checkout() {
  if(!loading)return ;
  loading = true ;
  const res = await fetch('/api/checkout', {
  
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      cartId: 'cart_123',
      addressId: 'addr_456'
    })
  });
  loaing = false ;

  const data = await res.json();
  console.log(data);
}
