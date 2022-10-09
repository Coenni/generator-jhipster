/**
 * Copyright 2013-2022 the original author or authors from the JHipster project.
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

const PRIORITY_PREFIX = '>';
const QUEUE_PREFIX = 'jhipster:';

/** Yeoman priorities */
const INITIALIZING = 'initializing';
const INITIALIZING_PRIORITY = `${PRIORITY_PREFIX}${INITIALIZING}`;

const PROMPTING = 'prompting';
const PROMPTING_PRIORITY = `${PRIORITY_PREFIX}${PROMPTING}`;

const CONFIGURING = 'configuring';
const CONFIGURING_PRIORITY = `${PRIORITY_PREFIX}${CONFIGURING}`;

const DEFAULT = 'default';
const DEFAULT_PRIORITY = `${PRIORITY_PREFIX}${DEFAULT}`;

const WRITING = 'writing';
const WRITING_PRIORITY = `${PRIORITY_PREFIX}${WRITING}`;

const TRANSFORM = 'transform';

const CONFLICTS = 'conflicts';

const INSTALL = 'install';
const INSTALL_PRIORITY = `${PRIORITY_PREFIX}${INSTALL}`;

const END = 'end';
const END_PRIORITY = `${PRIORITY_PREFIX}${END}`;

/** Custom priorities */
const COMPOSING = 'composing';
const COMPOSING_PRIORITY = `${PRIORITY_PREFIX}${COMPOSING}`;
const COMPOSING_QUEUE = `${QUEUE_PREFIX}${COMPOSING}`;

const LOADING = 'loading';
const LOADING_PRIORITY = `${PRIORITY_PREFIX}${LOADING}`;
const LOADING_QUEUE = `${QUEUE_PREFIX}${LOADING}`;

const PREPARING = 'preparing';
const PREPARING_PRIORITY = `${PRIORITY_PREFIX}${PREPARING}`;
const PREPARING_QUEUE = `${QUEUE_PREFIX}${PREPARING}`;

const CONFIGURING_EACH_ENTITY = 'configuringEachEntity';
const CONFIGURING_EACH_ENTITY_PRIORITY = `${PRIORITY_PREFIX}${CONFIGURING_EACH_ENTITY}`;
const CONFIGURING_EACH_ENTITY_QUEUE = `${QUEUE_PREFIX}${CONFIGURING_EACH_ENTITY}`;

const LOADING_ENTITIES = 'loadingEntities';
const LOADING_ENTITIES_PRIORITY = `${PRIORITY_PREFIX}${LOADING_ENTITIES}`;
const LOADING_ENTITIES_QUEUE = `${QUEUE_PREFIX}${LOADING_ENTITIES}`;

const PREPARING_EACH_ENTITY = 'preparingEachEntity';
const PREPARING_EACH_ENTITY_PRIORITY = `${PRIORITY_PREFIX}${PREPARING_EACH_ENTITY}`;
const PREPARING_EACH_ENTITY_QUEUE = `${QUEUE_PREFIX}${PREPARING_EACH_ENTITY}`;

const PREPARING_EACH_ENTITY_FIELD = 'preparingEachEntityField';
const PREPARING_EACH_ENTITY_FIELD_PRIORITY = `${PRIORITY_PREFIX}${PREPARING_EACH_ENTITY_FIELD}`;
const PREPARING_EACH_ENTITY_FIELD_QUEUE = `${QUEUE_PREFIX}${PREPARING_EACH_ENTITY_FIELD}`;

const PREPARING_EACH_ENTITY_RELATIONSHIP = 'preparingEachEntityRelationship';
const PREPARING_EACH_ENTITY_RELATIONSHIP_PRIORITY = `${PRIORITY_PREFIX}${PREPARING_EACH_ENTITY_RELATIONSHIP}`;
const PREPARING_EACH_ENTITY_RELATIONSHIP_QUEUE = `${QUEUE_PREFIX}${PREPARING_EACH_ENTITY_RELATIONSHIP}`;

const POST_PREPARING_EACH_ENTITY = 'postPreparingEachEntity';
const POST_PREPARING_EACH_ENTITY_PRIORITY = `${PRIORITY_PREFIX}${POST_PREPARING_EACH_ENTITY}`;
const POST_PREPARING_EACH_ENTITY_QUEUE = `${QUEUE_PREFIX}${POST_PREPARING_EACH_ENTITY}`;

const WRITING_ENTITIES = 'writingEntities';
const WRITING_ENTITIES_PRIORITY = `${PRIORITY_PREFIX}${WRITING_ENTITIES}`;
const WRITING_ENTITIES_QUEUE = `${QUEUE_PREFIX}${WRITING_ENTITIES}`;

const POST_WRITING = 'postWriting';
const POST_WRITING_PRIORITY = `${PRIORITY_PREFIX}${POST_WRITING}`;
const POST_WRITING_QUEUE = `${QUEUE_PREFIX}${POST_WRITING}`;

const POST_WRITING_ENTITIES = 'postWritingEntities';
const POST_WRITING_ENTITIES_PRIORITY = `${PRIORITY_PREFIX}${POST_WRITING_ENTITIES}`;
const POST_WRITING_ENTITIES_QUEUE = `${QUEUE_PREFIX}${POST_WRITING_ENTITIES}`;

const POST_INSTALL = 'postInstall';
const POST_INSTALL_PRIORITY = `${PRIORITY_PREFIX}${POST_INSTALL}`;
const POST_INSTALL_QUEUE = `${QUEUE_PREFIX}${POST_INSTALL}`;

/** @private */
const PRE_CONFLICTS = 'preConflicts';
/** @private */
const PRE_CONFLICTS_PRIORITY = `${PRIORITY_PREFIX}${PRE_CONFLICTS}`;
/** @private */
const PRE_CONFLICTS_QUEUE = `${QUEUE_PREFIX}${PRE_CONFLICTS}`;

/**
 * Custom priorities to improve jhipster workflow.
 */
const CUSTOM_PRIORITIES = [
  {
    priorityName: COMPOSING,
    queueName: COMPOSING_QUEUE,
    before: LOADING,
  },
  {
    priorityName: LOADING,
    queueName: LOADING_QUEUE,
    before: PREPARING,
    args: generator => generator.getArgsForPriority(LOADING),
  },
  {
    priorityName: PREPARING,
    queueName: PREPARING_QUEUE,
    before: DEFAULT,
    args: generator => generator.getArgsForPriority(PREPARING),
  },
  {
    priorityName: DEFAULT,
    args: generator => generator.getArgsForPriority(DEFAULT),
    edit: true,
  },
  {
    priorityName: WRITING,
    args: generator => generator.getArgsForPriority(WRITING),
    edit: true,
  },
  {
    priorityName: POST_WRITING,
    queueName: POST_WRITING_QUEUE,
    before: PRE_CONFLICTS,
    args: generator => generator.getArgsForPriority(POST_WRITING),
  },
  {
    priorityName: PRE_CONFLICTS,
    queueName: PRE_CONFLICTS_QUEUE,
    args: generator => generator.getArgsForPriority(PRE_CONFLICTS),
    before: CONFLICTS,
  },
  {
    priorityName: INSTALL,
    args: generator => generator.getArgsForPriority(INSTALL),
    edit: true,
  },
  {
    priorityName: POST_INSTALL,
    queueName: POST_INSTALL_QUEUE,
    before: END,
    args: generator => generator.getArgsForPriority(POST_INSTALL),
  },
  {
    priorityName: END,
    args: generator => generator.getArgsForPriority(END),
    edit: true,
  },
].reverse();

const compat = {
  PRIORITY_PREFIX: '',
  INITIALIZING_PRIORITY: INITIALIZING,
  PROMPTING_PRIORITY: PROMPTING,
  CONFIGURING_PRIORITY: CONFIGURING,
  COMPOSING_PRIORITY: COMPOSING,
  LOADING_PRIORITY: LOADING,
  PREPARING_PRIORITY: PREPARING,

  CONFIGURING_EACH_ENTITY_PRIORITY: CONFIGURING_EACH_ENTITY,
  LOADING_ENTITIES_PRIORITY: LOADING_ENTITIES,
  PREPARING_EACH_ENTITY_PRIORITY: PREPARING_EACH_ENTITY,
  PREPARING_EACH_ENTITY_FIELD_PRIORITY: PREPARING_EACH_ENTITY_FIELD,
  PREPARING_EACH_ENTITY_RELATIONSHIP_PRIORITY: PREPARING_EACH_ENTITY_RELATIONSHIP,
  POST_PREPARING_EACH_ENTITY_PRIORITY: POST_PREPARING_EACH_ENTITY,

  DEFAULT_PRIORITY: DEFAULT,
  WRITING_PRIORITY: WRITING,
  WRITING_ENTITIES_PRIORITY: WRITING_ENTITIES,
  POST_WRITING_PRIORITY: POST_WRITING,
  POST_WRITING_ENTITIES_PRIORITY: POST_WRITING_ENTITIES,
  PRE_CONFLICTS_PRIORITY: PRE_CONFLICTS,
  INSTALL_PRIORITY: INSTALL,
  POST_INSTALL_PRIORITY: POST_INSTALL,
  END_PRIORITY: END,
};

const PRIORITY_NAMES = {
  INITIALIZING,
  PROMPTING,
  CONFIGURING,
  COMPOSING,
  LOADING,
  PREPARING,

  CONFIGURING_EACH_ENTITY,
  LOADING_ENTITIES,
  PREPARING_EACH_ENTITY,
  PREPARING_EACH_ENTITY_FIELD,
  PREPARING_EACH_ENTITY_RELATIONSHIP,
  POST_PREPARING_EACH_ENTITY,

  DEFAULT,
  WRITING,
  WRITING_ENTITIES,
  POST_WRITING,
  POST_WRITING_ENTITIES,
  PRE_CONFLICTS,
  INSTALL,
  POST_INSTALL,
  END,
};

const BASE_PRIORITY_NAMES = [
  INITIALIZING,
  PROMPTING,
  CONFIGURING,
  COMPOSING,
  LOADING,
  PREPARING,
  DEFAULT,
  WRITING,
  POST_WRITING,
  INSTALL,
  POST_INSTALL,
  END,
];

const CUSTOM_PRIORITIES_ENTITIES = [
  {
    priorityName: CONFIGURING_EACH_ENTITY,
    queueName: CONFIGURING_EACH_ENTITY_QUEUE,
    before: LOADING_ENTITIES,
    skip: true,
  },
  {
    priorityName: LOADING_ENTITIES,
    queueName: LOADING_ENTITIES_QUEUE,
    before: PREPARING_EACH_ENTITY,
    skip: true,
  },
  {
    priorityName: PREPARING_EACH_ENTITY,
    queueName: PREPARING_EACH_ENTITY_QUEUE,
    before: PREPARING_EACH_ENTITY_FIELD,
    skip: true,
  },
  {
    priorityName: PREPARING_EACH_ENTITY_FIELD,
    queueName: PREPARING_EACH_ENTITY_FIELD_QUEUE,
    before: PREPARING_EACH_ENTITY_RELATIONSHIP,
    skip: true,
  },
  {
    priorityName: PREPARING_EACH_ENTITY_RELATIONSHIP,
    queueName: PREPARING_EACH_ENTITY_RELATIONSHIP_QUEUE,
    before: POST_PREPARING_EACH_ENTITY,
    skip: true,
  },
  {
    priorityName: POST_PREPARING_EACH_ENTITY,
    queueName: POST_PREPARING_EACH_ENTITY_QUEUE,
    before: DEFAULT,
    skip: true,
  },
  {
    priorityName: WRITING_ENTITIES,
    queueName: WRITING_ENTITIES_QUEUE,
    before: TRANSFORM,
    skip: true,
  },
  {
    priorityName: POST_WRITING_ENTITIES,
    queueName: POST_WRITING_ENTITIES_QUEUE,
    before: PRE_CONFLICTS,
    skip: true,
  },
].reverse();

const QUEUES = {
  INITIALIZING_QUEUE: INITIALIZING,
  PROMPTING_QUEUE: PROMPTING,
  CONFIGURING_QUEUE: CONFIGURING,
  COMPOSING_QUEUE,
  LOADING_QUEUE,
  PREPARING_QUEUE,

  CONFIGURING_EACH_ENTITY_QUEUE,
  LOADING_ENTITIES_QUEUE,
  PREPARING_EACH_ENTITY_QUEUE,
  PREPARING_EACH_ENTITY_FIELD_QUEUE,
  PREPARING_EACH_ENTITY_RELATIONSHIP_QUEUE,

  DEFAULT_QUEUE: DEFAULT,
  WRITING_QUEUE: WRITING,
  WRITING_ENTITIES_QUEUE,
  POST_WRITING_QUEUE,
  POST_WRITING_ENTITIES_QUEUE,
  PRE_CONFLICTS_QUEUE,
  INSTALL_QUEUE: INSTALL,
  POST_INSTALL_QUEUE,
  END_QUEUE: END,
};

const ENTITY_PRIORITY_NAMES = [
  INITIALIZING,
  PROMPTING,
  CONFIGURING,
  COMPOSING,
  LOADING,
  PREPARING,
  DEFAULT,
  WRITING,
  POST_WRITING,
  INSTALL,
  POST_INSTALL,
  END,
];

const BASE_ENTITY_PRIORITY_NAMES = [
  CONFIGURING_EACH_ENTITY,
  LOADING_ENTITIES,
  PREPARING_EACH_ENTITY,
  PREPARING_EACH_ENTITY_FIELD,
  PREPARING_EACH_ENTITY_RELATIONSHIP,
  POST_PREPARING_EACH_ENTITY,
  WRITING_ENTITIES,
  POST_WRITING_ENTITIES,
];

module.exports = {
  PRIORITY_NAMES,
  PRIORITY_PREFIX,
  CUSTOM_PRIORITIES,
  CUSTOM_PRIORITIES_ENTITIES,
  BASE_PRIORITY_NAMES,
  ENTITY_PRIORITY_NAMES,
  BASE_ENTITY_PRIORITY_NAMES,
  compat,
  QUEUES,

  INITIALIZING_PRIORITY,
  PROMPTING_PRIORITY,
  CONFIGURING_PRIORITY,
  COMPOSING_PRIORITY,
  LOADING_PRIORITY,
  PREPARING_PRIORITY,

  CONFIGURING_EACH_ENTITY_PRIORITY,
  LOADING_ENTITIES_PRIORITY,
  PREPARING_EACH_ENTITY_PRIORITY,
  PREPARING_EACH_ENTITY_FIELD_PRIORITY,
  PREPARING_EACH_ENTITY_RELATIONSHIP_PRIORITY,
  POST_PREPARING_EACH_ENTITY_PRIORITY,

  DEFAULT_PRIORITY,
  WRITING_PRIORITY,
  WRITING_ENTITIES_PRIORITY,
  POST_WRITING_PRIORITY,
  POST_WRITING_ENTITIES_PRIORITY,
  PRE_CONFLICTS_PRIORITY,
  INSTALL_PRIORITY,
  POST_INSTALL_PRIORITY,
  END_PRIORITY,
};
