/**
 * Copyright 2013-2023 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { SERVER_MAIN_SRC_DIR } from '../generator-constants.mjs';
import { moveToJavaEntityPackageSrcDir } from '../server/utils.mjs';

export const entityFiles = {
  server: [
    {
      path: `${SERVER_MAIN_SRC_DIR}package/`,
      renameTo: moveToJavaEntityPackageSrcDir,
      templates: ['domain/_PersistClass_.java.jhi.spring_data_mongodb'],
    },
  ],
};

export function cleanupMongodbEntityFilesTask({ application, entities }) {}

export default async function writeEntityMongodbFiles({ application, entities }) {
  for (const entity of entities.filter(entity => !entity.builtIn && !entity.skipServer)) {
    await this.writeFiles({
      sections: entityFiles,
      context: { ...application, ...entity },
    });
  }
}
