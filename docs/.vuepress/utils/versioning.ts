export const V5_PREFIX = "/v5";

const isVersionedPath = (path: string, prefix: string): boolean =>
  path === prefix || path.startsWith(`${prefix}/`);

const prefixInternalLink = (link: string, prefix: string): string => {
  if (
    !link.startsWith("/") ||
    link.startsWith("//") ||
    isVersionedPath(link, prefix)
  ) {
    return link;
  }

  return `${prefix}${link}`;
};

export const getVersionPrefix = (path: string): string =>
  isVersionedPath(path, V5_PREFIX) ? V5_PREFIX : "";

export const stripVersionPrefix = (path: string): string => {
  const prefix = getVersionPrefix(path);

  if (!prefix) return path;

  return path.slice(prefix.length) || "/";
};

export const withVersionPrefix = (
  targetPath: string,
  currentPath: string,
): string => {
  const prefix = getVersionPrefix(currentPath);

  return prefix ? prefixInternalLink(targetPath, prefix) : targetPath;
};
