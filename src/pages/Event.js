import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout';
import '../../src/sass/pages/events.scss';
import { StyledTitle } from '../components/base';
import event from '../../src/assets/images/event.svg';
import Ellipse from '../../src/assets/images/Ellipse.svg';
import img8 from '../../src/assets/images/image 8.svg';
import img9 from '../../src/assets/images/image 9.svg';
import Button from '../components/base/Button';

export function Event() {
  const COLOR = 'secondary';
  return (
    <Layout>
      <div className='eventos'>
        <StyledTitle text='Evento' level={1} color={COLOR} />
        <img src={event} alt='iconhome' className='eventImg' />
        <div className='eventWord'>
          <div className='keyword'>
            <a>Primer keyword</a>
            <a>Segundo Keyword</a>
            <a>Tercer keyword</a>
            <a>Cuarto keyword</a>
          </div>
          <div>
            <img src={Ellipse} alt='iconhome' className='ellipseEvent' />
            <h1 className='orador'>@Orador</h1>
          </div>
        </div>
        <div className='descriptionEvent'>
          <h1 className='titleEvent'>
            Lorem ipsum dolor sit amet, y insectetur adipisci.
          </h1>
          <p className='desEvent'>
            Vestibulum rhoncus, lorem nec scelerisque ultrices, tellus diam
            euismod orci, in interdum erat nulla eget ante. Nullam arcu nunc,
            suscipit dapibus laoreet eget, sagittis quis ipsum. Aliquam
            tincidunt pulvinar posuere. Curabitur sagittis quam sit amet velit
            semper, et egestas nunc pharetra. Mauris venenatis, felis sed
            lacinia commodo, tellus lorem congue enim, nec congue elit dolor nec
            dolor. Donec egestas sapien viverra, vestibulum magna in, hendrerit
            ligula. Fusce vitae est consequat, posuere ipsum ut, accumsan leo.
            Praesent eu ligula ac justo fermentum elementum. Quisque gravida
            nibh metus, sit amet pretium eros tincidunt sed
          </p>
          <div className='commentEvent'>
            <p className='desCommentEvent'>
              Accumsan cursus. Ut cursus neque ante, at tincidunt metus accumsan
              sed. Integer sed turpis ipsum. Fusce ornare lacus a pharetra
              ultricies. Nullam id nibh quam. Interdum et malesuada fames ac
              ante ipsum primis in faucibus.
            </p>
          </div>
            <Link to="/login">
              <Button text='Reservar' style={{ marginTop: 50, fontSize: 20 }} />
            </Link>
        </div>
        <StyledTitle text='Otros eventos' level={1} color={COLOR} />
        <div className='publicacion'>
          <img src={img8} alt='iconhome' className='publicacion2' />
          <img src={img9} alt='iconhome' className='publicacion2' />
          <img src={img8} alt='iconhome' className='publicacion2' />
        </div>
      </div>
    </Layout>
  );
}
