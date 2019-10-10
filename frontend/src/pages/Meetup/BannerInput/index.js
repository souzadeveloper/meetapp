import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdCameraAlt } from 'react-icons/md';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { Container } from './styles';

export default function BannerInput({ banner }) {
  const { defaultValue, registerField, error } = useField('banner');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (banner) {
      setFile(banner.id);
      setPreview(banner.url);
    }
  }, [banner]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        {preview ? (
          <img src={preview} alt="Banner" />
        ) : (
          <div>
            <MdCameraAlt size={40} color="#999" />
            <strong>Selecionar Imagem</strong>
          </div>
        )}

        <input
          type="file"
          id="banner"
          data-file={file}
          accept="image/*"
          onChange={handleChange}
          ref={ref}
        />
      </label>
      {error && <span>{error}</span>}
    </Container>
  );
}

BannerInput.propTypes = {
  banner: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

BannerInput.defaultProps = {
  banner: null,
};
