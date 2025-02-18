// Copyright 2021-2023 the Kubeapps contributors.
// SPDX-License-Identifier: Apache-2.0

// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts,import_extension=none"
// @generated from file kubeappsapis/plugins/helm/packages/v1alpha1/helm.proto (package kubeappsapis.plugins.helm.packages.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  CreateInstalledPackageRequest,
  CreateInstalledPackageResponse,
  DeleteInstalledPackageRequest,
  DeleteInstalledPackageResponse,
  GetAvailablePackageDetailRequest,
  GetAvailablePackageDetailResponse,
  GetAvailablePackageSummariesRequest,
  GetAvailablePackageSummariesResponse,
  GetAvailablePackageVersionsRequest,
  GetAvailablePackageVersionsResponse,
  GetInstalledPackageDetailRequest,
  GetInstalledPackageDetailResponse,
  GetInstalledPackageResourceRefsRequest,
  GetInstalledPackageResourceRefsResponse,
  GetInstalledPackageSummariesRequest,
  GetInstalledPackageSummariesResponse,
  UpdateInstalledPackageRequest,
  UpdateInstalledPackageResponse,
} from "../../../../core/packages/v1alpha1/packages_pb";
import { MethodKind } from "@bufbuild/protobuf";
import { RollbackInstalledPackageRequest, RollbackInstalledPackageResponse } from "./helm_pb";
import {
  AddPackageRepositoryRequest,
  AddPackageRepositoryResponse,
  DeletePackageRepositoryRequest,
  DeletePackageRepositoryResponse,
  GetPackageRepositoryDetailRequest,
  GetPackageRepositoryDetailResponse,
  GetPackageRepositoryPermissionsRequest,
  GetPackageRepositoryPermissionsResponse,
  GetPackageRepositorySummariesRequest,
  GetPackageRepositorySummariesResponse,
  UpdatePackageRepositoryRequest,
  UpdatePackageRepositoryResponse,
} from "../../../../core/packages/v1alpha1/repositories_pb";

/**
 * @generated from service kubeappsapis.plugins.helm.packages.v1alpha1.HelmPackagesService
 */
export const HelmPackagesService = {
  typeName: "kubeappsapis.plugins.helm.packages.v1alpha1.HelmPackagesService",
  methods: {
    /**
     * GetAvailablePackageSummaries returns the available packages managed by the 'helm' plugin
     *
     * @generated from rpc kubeappsapis.plugins.helm.packages.v1alpha1.HelmPackagesService.GetAvailablePackageSummaries
     */
    getAvailablePackageSummaries: {
      name: "GetAvailablePackageSummaries",
      I: GetAvailablePackageSummariesRequest,
      O: GetAvailablePackageSummariesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetAvailablePackageDetail returns the package details managed by the 'helm' plugin
     *
     * @generated from rpc kubeappsapis.plugins.helm.packages.v1alpha1.HelmPackagesService.GetAvailablePackageDetail
     */
    getAvailablePackageDetail: {
      name: "GetAvailablePackageDetail",
      I: GetAvailablePackageDetailRequest,
      O: GetAvailablePackageDetailResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetAvailablePackageVersions returns the package versions managed by the 'helm' plugin
     *
     * @generated from rpc kubeappsapis.plugins.helm.packages.v1alpha1.HelmPackagesService.GetAvailablePackageVersions
     */
    getAvailablePackageVersions: {
      name: "GetAvailablePackageVersions",
      I: GetAvailablePackageVersionsRequest,
      O: GetAvailablePackageVersionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetInstalledPackageSummaries returns the installed packages managed by the 'helm' plugin
     *
     * @generated from rpc kubeappsapis.plugins.helm.packages.v1alpha1.HelmPackagesService.GetInstalledPackageSummaries
     */
    getInstalledPackageSummaries: {
      name: "GetInstalledPackageSummaries",
      I: GetInstalledPackageSummariesRequest,
      O: GetInstalledPackageSummariesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetInstalledPackageDetail returns the requested installed package managed by the 'helm' plugin
     *
     * @generated from rpc kubeappsapis.plugins.helm.packages.v1alpha1.HelmPackagesService.GetInstalledPackageDetail
     */
    getInstalledPackageDetail: {
      name: "GetInstalledPackageDetail",
      I: GetInstalledPackageDetailRequest,
      O: GetInstalledPackageDetailResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateInstalledPackage creates an installed package based on the request.
     *
     * @generated from rpc kubeappsapis.plugins.helm.packages.v1alpha1.HelmPackagesService.CreateInstalledPackage
     */
    createInstalledPackage: {
      name: "CreateInstalledPackage",
      I: CreateInstalledPackageRequest,
      O: CreateInstalledPackageResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateInstalledPackage updates an installed package based on the request.
     *
     * @generated from rpc kubeappsapis.plugins.helm.packages.v1alpha1.HelmPackagesService.UpdateInstalledPackage
     */
    updateInstalledPackage: {
      name: "UpdateInstalledPackage",
      I: UpdateInstalledPackageRequest,
      O: UpdateInstalledPackageResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteInstalledPackage deletes an installed package based on the request.
     *
     * @generated from rpc kubeappsapis.plugins.helm.packages.v1alpha1.HelmPackagesService.DeleteInstalledPackage
     */
    deleteInstalledPackage: {
      name: "DeleteInstalledPackage",
      I: DeleteInstalledPackageRequest,
      O: DeleteInstalledPackageResponse,
      kind: MethodKind.Unary,
    },
    /**
     * RollbackInstalledPackage updates an installed package based on the request.
     *
     * @generated from rpc kubeappsapis.plugins.helm.packages.v1alpha1.HelmPackagesService.RollbackInstalledPackage
     */
    rollbackInstalledPackage: {
      name: "RollbackInstalledPackage",
      I: RollbackInstalledPackageRequest,
      O: RollbackInstalledPackageResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetInstalledPackageResourceRefs returns the references for the Kubernetes resources created by
     * an installed package.
     *
     * @generated from rpc kubeappsapis.plugins.helm.packages.v1alpha1.HelmPackagesService.GetInstalledPackageResourceRefs
     */
    getInstalledPackageResourceRefs: {
      name: "GetInstalledPackageResourceRefs",
      I: GetInstalledPackageResourceRefsRequest,
      O: GetInstalledPackageResourceRefsResponse,
      kind: MethodKind.Unary,
    },
  },
} as const;

/**
 * @generated from service kubeappsapis.plugins.helm.packages.v1alpha1.HelmRepositoriesService
 */
export const HelmRepositoriesService = {
  typeName: "kubeappsapis.plugins.helm.packages.v1alpha1.HelmRepositoriesService",
  methods: {
    /**
     * AddPackageRepository add an existing package repository to the set of ones already managed by the Helm plugin
     *
     * @generated from rpc kubeappsapis.plugins.helm.packages.v1alpha1.HelmRepositoriesService.AddPackageRepository
     */
    addPackageRepository: {
      name: "AddPackageRepository",
      I: AddPackageRepositoryRequest,
      O: AddPackageRepositoryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kubeappsapis.plugins.helm.packages.v1alpha1.HelmRepositoriesService.GetPackageRepositoryDetail
     */
    getPackageRepositoryDetail: {
      name: "GetPackageRepositoryDetail",
      I: GetPackageRepositoryDetailRequest,
      O: GetPackageRepositoryDetailResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kubeappsapis.plugins.helm.packages.v1alpha1.HelmRepositoriesService.GetPackageRepositorySummaries
     */
    getPackageRepositorySummaries: {
      name: "GetPackageRepositorySummaries",
      I: GetPackageRepositorySummariesRequest,
      O: GetPackageRepositorySummariesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kubeappsapis.plugins.helm.packages.v1alpha1.HelmRepositoriesService.UpdatePackageRepository
     */
    updatePackageRepository: {
      name: "UpdatePackageRepository",
      I: UpdatePackageRepositoryRequest,
      O: UpdatePackageRepositoryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kubeappsapis.plugins.helm.packages.v1alpha1.HelmRepositoriesService.DeletePackageRepository
     */
    deletePackageRepository: {
      name: "DeletePackageRepository",
      I: DeletePackageRepositoryRequest,
      O: DeletePackageRepositoryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kubeappsapis.plugins.helm.packages.v1alpha1.HelmRepositoriesService.GetPackageRepositoryPermissions
     */
    getPackageRepositoryPermissions: {
      name: "GetPackageRepositoryPermissions",
      I: GetPackageRepositoryPermissionsRequest,
      O: GetPackageRepositoryPermissionsResponse,
      kind: MethodKind.Unary,
    },
  },
} as const;
