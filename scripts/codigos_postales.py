# -*- coding: utf-8 -*-
"""codigos_postales.py

@author Arturo Ortega (@macarthuror)
https://github.com/macarthuror

@project MexPost
https://github.com/macarthuror/mexpost

Created at: 24/04/2021
Edited at: 24/04/2021

Required pacages:
- pandas
- sqlalchemy
- mysqlclient
"""

import os
import pandas as pd
from sqlalchemy import create_engine
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_HOST = os.getenv('DB_HOST')
DB_PORT = os.getenv('DB_PORT')
DB_NAME = os.getenv('DB_NAME')

# Connection to the database
# engine = create_engine(f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}")

# Fetch and clean postal codes from Correos de México
codigos = pd.read_csv(
    'https://www.correosdemexico.gob.mx/datosabiertos/cp/cpdescarga.txt',
    sep="|",
    encoding="ISO-8859-1",
    skiprows=[0],
    dtype={'d_codigo': 'string'}
)

# Copy dataframes to use for states and municipalities
codigos_estados = codigos.copy()
codigos_municipios = codigos.copy()

# Postal Codes
# Drop unnecessary columns
codigos.drop(columns=['d_CP', 'c_CP', 'c_oficina', 'c_tipo_asenta', 'id_asenta_cpcons', 'c_cve_ciudad', 'd_estado', 'D_mnpio'], inplace=True)

# Rename columns to match database schema
codigos.rename(columns={
    'd_codigo': 'codigo',
    'd_asenta': 'nombre',
    'd_tipo_asenta': 'tipo',
    'd_ciudad': 'ciudad',
    'd_zona': 'zona',
    'c_estado': 'estado_id',
    'c_mnpio': 'municipio_id'
}, inplace=True)

# States
codigos_estados.rename(columns={'c_estado': 'id', 'd_estado': 'nombre'}, inplace=True)
estados = codigos_estados[['nombre', 'id']].drop_duplicates().sort_values(by='id')

# Municipalities
codigos_municipios.rename(columns={'c_mnpio': 'id', 'D_mnpio': 'nombre', 'c_estado': 'estado_id'}, inplace=True)
municipios = codigos_municipios[['nombre', 'id', 'estado_id']].drop_duplicates().sort_values(by='id')

# Update database tables
try:
#     estados.to_sql('estados', con=engine, if_exists='append', index=False)
#     municipios.to_sql('municipios', con=engine, if_exists='append', index=False)
#     codigos.to_sql('codigos_postales', con=engine, if_exists='append', index=False)
    estados.to_csv('estados', index=False)
    municipios.to_csv('municipios', index=False)
    codigos.to_csv('codigos_postales', index=False)

    print('CODIGOS_IMPORTADOS: Los estados, municipios y códigos se importaron correctamente.')
except Exception as e:
    print(f"Error: {e}")