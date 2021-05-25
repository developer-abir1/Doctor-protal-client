import React from 'react';
import featured from '../../../images/fature.png'

const FeaturedService = () => {
    return (
        <section className="featured-container pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 m-md-0">
                    <img className="img-fluid" src={featured} alt="" srcset="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                       <h1 className="pb-5 mb-5">Exceptional Dental <br /> Care , on Your Terms </h1>
                       <p className="text-secondary my-5 pb-5 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae maiores fugit qui accusantium eligendi, ipsum et nisi cumque doloribus mollitia quo sint blanditiis molestias, neque ipsam aperiam natus quibusdam officia vitae suscipit? Assumenda, cum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, sunt nemo quae facilis a vel provident hic, deleniti ex dicta necessitatibus officiis eius atque voluptatibus recusandae assumenda deserunt quaerat placeat. Voluptate, illo architecto? Dolorem, vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus architecto eveniet sed ea excepturi? Animi illum iusto eaque vel accusantium aliquid at omnis esse deleniti quis reiciendis officia quaerat quos corrupti, eligendi veritatis odio.</p>
                       <button className="btn-brand ">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;