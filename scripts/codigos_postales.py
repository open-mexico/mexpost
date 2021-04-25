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

import pandas as pd
from sqlalchemy import create_engine

# Conexión a la base de datos
# TODO: get data from .env file
engine = create_engine("mysql+mysqldb://root:@localhost:3306/mexpost")

# Obtener y limpiar códigos postales desde Correos de México
codigos = pd.read_csv('https://www.correosdemexico.gob.mx/datosabiertos/cp/cpdescarga.txt', sep="|", encoding = "ISO-8859-1", skiprows=[0], dtype={ 'd_codigo': 'string'})

# Se copian frames para usar con los estados y los municipios
codigos_estados = codigos.copy()
codigos_municipios = codigos.copy()

# Códigos postales
# Remueve columnas que no se ocuparan
codigos = codigos.drop(['d_CP', 'c_CP','c_oficina', 'c_tipo_asenta', 'id_asenta_cpcons', 'c_cve_ciudad', 'd_estado', 'D_mnpio'], axis=1)
# Renombra las columnas con los nombres usados en la base de datos
codigos.rename(columns={'index': '', 'd_codigo': 'codigo', 'd_asenta': 'nombre', 'd_tipo_asenta': 'tipo', 'd_ciudad': 'ciudad', 'd_zona': 'zona', 'c_estado': 'estado_id', 'c_mnpio': 'municipio_id'}, inplace=True)

# Estados
codigos_estados.rename(columns={'c_estado': 'id', 'd_estado': 'nombre'},inplace=True)
## Agrupa los estados con su respectivo id y nombre
estados = codigos_estados[['nombre', 'id']].sort_values(by='id').groupby(['id', 'nombre']).apply(list).to_frame()
estados.drop(estados.columns[len(estados.columns)-1], axis=1, inplace=True)

# Municipios
codigos_municipios.rename(columns={'c_mnpio': 'id', 'D_mnpio': 'nombre', 'c_estado': 'estado_id'},inplace=True)
## Agrupa los Municipios con su respectivo id ,nombre y el estado al que pertenece
municipios = codigos_municipios[['nombre', 'id', 'estado_id']].sort_values(by='id').groupby(['id', 'nombre', 'estado_id'], ).apply(list).to_frame()
municipios.drop(municipios.columns[len(municipios.columns)-1], axis=1, inplace=True)

# Actualiza los datos en la base creada.
try:
        estados.to_sql('estados', con=engine, if_exists='append')
        municipios.to_sql('municipios', con=engine, if_exists='append')
        codigos.to_sql('codigos_postales', con=engine, if_exists='append', index=False)

        print('CODIGOS_IMPORTADOS: Los estados, municipios y códigos se importaron correctamente.')
except Exception as e:
        print(e)
