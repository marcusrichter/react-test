import React from 'react';
import Button from './Buttons/Button';

export default () => <div className="container-fluid jumbo-teaser">
    <div className="row justify-content-center">
        <div className="col-12 d-flex">
            <div className="mx-auto my-auto text-center">
            <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
            <Button type="yellowFilled" className="mt-4" onClick={() => alert('x')}>
                Mehr anzeigen
            </Button>            
            </div>
        </div>      
    </div>    
</div>;
